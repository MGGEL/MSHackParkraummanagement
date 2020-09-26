<?php

namespace App\Controller;

use App\Repository\ParkplatzRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class AuswertungController extends BaseController
{
    private $parkplatzRepository;
    private $entityManager;

    public function __construct(ParkplatzRepository $parkplatzRepository,
                                EntityManagerInterface $entityManager)
    {
        $this->parkplatzRepository = $parkplatzRepository;
        $this->entityManager = $entityManager;
    }

    public function Auslastung(Request $request): Response
    {

        return $this->render('Default/auslastung.twig', $this->addNavMenuData($request));
    }

    public function Heatmap(Request $request): Response
    {

        return $this->render('Default/heatmap.twig', $this->addNavMenuData($request));
    }

    public function Umsatz(Request $request): Response
    {

        return $this->render('Default/umsatz.twig', $this->addNavMenuData($request));
    }
}
