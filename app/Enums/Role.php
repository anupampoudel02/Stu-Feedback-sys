<?php

namespace App\Enums;

enum Role : string {
    case ADMIN = "admin";
    case STUDENT = "student";

    public function getName() {
        return match ($this) {
            self::ADMIN => "Admin",
            self::STUDENT => "Student"
        };
    }
}
