<?php

namespace Database\Seeders;

use App\Enums\Role as RoleEnum;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = RoleEnum::cases();

        foreach($roles as $role) {
            $role = Role::firstOrCreate(['name' => $role->value],
                ['guard_name' => 'web', 'name' => $role->value]
            );
        }
    }
}
