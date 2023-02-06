import CatalogLayout from "../../components/layouts/CatalogLayout/CatalogLayout";
import BaseCard from "../../components/blocks/BaseCard/BaseCard";
import PageTitleHeader from "../../components/elements/PageTitleHeader/PageTitleHeader";
import CatalogListWrap from "../../components/elements/CatalogListWrap/CatalogListWrap";
import newsList from "../../mock/catalog/news";
import {formatFullDate} from "../../utils/format/formatFullDate";

export default function NewsCatalogPage() {


    return (
        <CatalogLayout>
            <PageTitleHeader title='Новости'/>
            <CatalogListWrap>
                {newsList.map(({title, about, date, id, image}) => (
                    <BaseCard
                        key={id}
                        title={title}
                        content={about}
                        image={image}
                        subTitle={formatFullDate(date)}
                        link={`/news/${id}`}
                    />
                ))}
            </CatalogListWrap>
        </CatalogLayout>
    )
}
