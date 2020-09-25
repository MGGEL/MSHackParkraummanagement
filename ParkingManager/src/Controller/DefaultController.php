<?php

namespace App\Controller;

use App\Entity\Parkplatz;
use App\Repository\ParkplatzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Energielenker\LoraBundle\Entity\Device;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    private $parkplatzRepository;
    private $entityManager;

    public function __construct(ParkplatzRepository $parkplatzRepository,
                                EntityManagerInterface $entityManager)
    {
        $this->parkplatzRepository = $parkplatzRepository;
        $this->entityManager = $entityManager;
    }

    public function index(): Response
    {
        $parkplaetze = $this->parkplatzRepository->findAll();

        $liste = '';

        foreach ($parkplaetze as $parkplatz) {
            $liste .= $parkplatz->getDeviceName().': ';
            if ($parkplatz->isBesetzt()) {
                $liste .= 'besetzt ';
            }
            else {
                $liste .= 'frei ';
            }
            $liste .= '(letzte Meldung: '.$parkplatz->getLetzteMeldung()->format('d.m.Y H:i:s').')<br>';

        }
        return $this->render('Default/index.html.twig', [
            'liste' => $liste
        ]);
    }

    public function WebhookAction(Request $request){
        $json = $request->getContent();
        $content = json_decode($json);

        if ( null === ($parkplatz = $this->parkplatzRepository->findOneBy(['deviceName' => $content->deviceName]))) {
            $parkplatz = new Parkplatz();
            $parkplatz->setDeviceName($content->deviceName);
        }
        $parkplatz->setBesetzt((bool)$this->decode($content->data));
        $parkplatz->setLetzteMeldung(new \DateTime());
        $this->entityManager->persist($parkplatz);
        $this->entityManager->flush();


        return new JsonResponse('Success.', 200);
    }

    private function decode(string $data): string
    {
        $binary = base64_decode($data);

        $byteArray = str_split($binary, 1);

        return $byteArray[0];
    }
}
