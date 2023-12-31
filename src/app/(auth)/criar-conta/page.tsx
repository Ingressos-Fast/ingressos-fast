'use client'

import { ButtonPrimary } from "@/components/buttons/button-primary";
import { ButtonSecondary } from "@/components/buttons/button-secondary";
import { InputText } from "@/components/form-components/input-text";
import { useForm } from "@/hooks/useForm";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUserPage() {
    const router = useRouter();
    const [error, setError] = useState(false);
    const name = useForm();
    const phone = useForm();
    const email = useForm();
    const password = useForm();

    const handleSubmit = () => {

    }

    return (
        <main className="w-screen h-screen flex items-center justify-center flex-col gap-6">
            <div className="w-full max-w-md flex items-center flex-col gap-6">
                <div className="flex flex-col items-center">
                    <Link href={'/'} className="flex">
                        <Image src={'/logo.svg'} alt="" width={218} height={24} />
                    </Link>
                    <h2 className="text-xl font-semibold text-gray-800 mt-4">Crie sua conta no Ingressos Fast!</h2>
                    <span className="text-base font-light text-gray-800">Seu espaço de ingressos online</span>
                </div>
                <form className="w-full max-w-md flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                    <InputText
                        id="name"
                        title="Nome"
                        type="text"
                        placeholder="Insira o seu nome"
                        {...name}
                    />
                    <InputText
                        id="phone"
                        title="Telefone"
                        type="phone"
                        placeholder="Insira o seu telefone"
                        {...phone}
                    />
                    <InputText
                        id="email"
                        title="Email"
                        type="email"
                        placeholder="Insira o seu email"
                        {...email}
                    />
                    <InputText
                        id="password"
                        title="Senha"
                        type="password"
                        placeholder="Insira a sua senha"
                        {...password}
                    />
                    {error && <span className="px-3 h-12 flex items-center bg-red-100 text-red-500 font-medium rounded-md">Erro ao fazer login, tente novamente.</span>}
                    <ButtonPrimary
                        title="Entrar"
                        full={true}
                        onClick={() => handleSubmit()}
                    />
                </form>
                <span>Já tem uma conta?</span>
                <ButtonSecondary
                    title="Acesse sua conta"
                    full={true}
                    onClick={() => router.push('/entrar')}
                />
            </div>
        </main>
    )
}