import Head from 'next/head';
import ConstructorLayout from "../components/layouts/ConstructorLayout/ConstructorLayout";
import ConstructorBody from "../components/constructor/body/ConstructorBody/ConstructorBody";
import {useConstructSelector} from "../store/construct/hooks/useConstructSelector";


export default function ConstructorPage() {
    const name = useConstructSelector(({settings}) => settings.name);

    return (
        <>
            <Head>
                <title>
                    Конструктор - {name}
                </title>
            </Head>
            <ConstructorBody/>
        </>
    )
}

ConstructorPage.getLayout = (page) => (
    <ConstructorLayout>
        {page}
    </ConstructorLayout>
)
