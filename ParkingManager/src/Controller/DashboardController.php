<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DashboardController extends AbstractController
{

    public function show() {

        return $this->render('Dashboard/show.html.twig');
    }
}