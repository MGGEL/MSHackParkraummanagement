<?php

namespace App\Controller;

use App\Entity\Parkplatz;
use App\Repository\ParkplatzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Energielenker\LoraBundle\Entity\Device;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AuswertungController extends AbstractController
{
    private $parkplatzRepository;
    private $entityManager;

    public function __construct(ParkplatzRepository $parkplatzRepository,
                                EntityManagerInterface $entityManager)
    {
        $this->parkplatzRepository = $parkplatzRepository;
        $this->entityManager = $entityManager;
    }

    public function Auslastung(): Response
    {

        return $this->render('Default/auslastung.twig');
    }

    public function Heatmap(): Response
    {

        return $this->render('Default/heatmap.twig');
    }

}
