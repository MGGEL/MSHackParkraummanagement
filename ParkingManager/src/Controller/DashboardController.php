<?php


namespace App\Controller;


use Symfony\Component\HttpFoundation\Request;

class DashboardController extends BaseController
{

    public function show(Request $request) {

        return $this->render('Dashboard/show.html.twig', $this->addNavMenuData($request));
    }
}
