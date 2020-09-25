<?php


namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="parkplatz")
 * @ORM\Entity(repositoryClass="App\Repository\ParkplatzRepository")
 */
class Parkplatz
{
    /**
     * @var int
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="device_name", type="string")
     */
    private $deviceName;

    /**
     * @var bool
     * @ORM\Column(name="besetzt", type="boolean")
     */
    private $besetzt;

    /**
     * @var \DateTime
     * @ORM\Column(name="letzte_meldung", type="datetime")
     */
    private $letzteMeldung;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return bool
     */
    public function isBesetzt(): bool
    {
        return $this->besetzt;
    }

    /**
     * @param bool $besetzt
     */
    public function setBesetzt(bool $besetzt): void
    {
        $this->besetzt = $besetzt;
    }

    /**
     * @return \DateTime
     */
    public function getLetzteMeldung(): \DateTime
    {
        return $this->letzteMeldung;
    }

    /**
     * @param \DateTime $letzteMeldung
     */
    public function setLetzteMeldung(\DateTime $letzteMeldung): void
    {
        $this->letzteMeldung = $letzteMeldung;
    }

    /**
     * @return string
     */
    public function getDeviceName(): string
    {
        return $this->deviceName;
    }

    /**
     * @param string $deviceName
     */
    public function setDeviceName(string $deviceName): void
    {
        $this->deviceName = $deviceName;
    }

}