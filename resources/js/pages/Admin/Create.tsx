import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import AppLayout from '@/layouts/app-layout';

type ModuleForm = {
    name: string;
    description: string;
};

interface ModuleCreateProps {
    status?: string;
}

export default function ModuleCreate({ status }: ModuleCreateProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<ModuleForm>>({
        name: '',
        description: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('modules.store'), {
            onFinish: () => reset(),
        });
    };

    return (
        <AppLayout breadcrumbs={[]}>
            <Head title="Create Module" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    {/* Module Name Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="name">Module Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Enter module name"
                        />
                        <InputError message={errors.name} />
                    </div>

                    {/* Module Description Field */}
                    <div className="grid gap-2">
                        <Label htmlFor="description">Module Description</Label>
                        <Input
                            id="description"
                            type="text"
                            required
                            tabIndex={2}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Enter module description"
                        />
                        <InputError message={errors.description} />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="mt-4 w-full" tabIndex={3} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create Module
                    </Button>
                </div>

                {/* Success or Status Message */}
                {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}

                {/* Redirect Link to Manage Modules */}
                <div className="text-muted-foreground text-center text-sm">
                    Want to manage modules?{' '}
                    <TextLink href={route('modules.index')} tabIndex={4}>
                        Go to Modules
                    </TextLink>
                </div>
            </form>
        </AppLayout>
    );
}
