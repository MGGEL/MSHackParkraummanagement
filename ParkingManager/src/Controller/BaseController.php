<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class BaseController extends AbstractController
{
    protected function addNavMenuData(Request $request, array $template_parameters = [])
    {
        $route = $request->get('_route');

        $links = [
            'dashboard' => $this->createNavEntry('dashboard_show', 'Dashboard', $route === 'dashboard_show'),
            'auslastung' => $this->createNavEntry('auslastung', 'Auslastung', $route === 'auslastung'),
            'heatmap' => $this->createNavEntry('heatmap', 'Frequentierung', $route === 'heatmap'),
            'umsatz' => $this->createNavEntry('umsatz', 'Einnahmen', $route === 'umsatz'),
        ];

        $template_parameters['navLinks'] = $links;

        return $template_parameters;
    }

    private function createNavEntry($route, $caption, $active)
    {
        return [
            'caption' => $caption,
            'url' => $this->generateUrl($route),
            'active' => $active
        ];
    }
}
