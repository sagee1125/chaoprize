import { sitemapTrilingualText } from "../components/const";
import { useTranslation } from "../hooks/useTranslation";

export type SitemapLink = { label: string; href: string };
export type SitemapColumn = {
  title: string;
  self?: string;
  links: SitemapLink[];
};

/**
 * 使用 hook 返回對應語言的 sitemap
 */
export const useSitemap = (): SitemapColumn[] => {
  const { t } = useTranslation(sitemapTrilingualText);

  const sitemap: SitemapColumn[] = [
    {
      title: t("introduction"),
      links: [
        { label: t("aboutPrize"), href: "/abouttheprize" },
        { label: t("organiser"), href: "/theorganiser" },
        { label: t("patron"), href: "/thepatron" },
      ],
    },
    {
      title: t("awardsLaureates"),
      links: [
        { label: t("awards"), href: "/awards" },
        { label: t("laureates"), href: "/laureates" },
      ],
    },
    {
      title: t("nomination"),
      links: [
        { label: t("nomination"), href: "/nomination" },
        { label: t("importantDates"), href: "/importantdates" },
      ],
    },
    {
      title: t("media"),
      links: [
        { label: t("news"), href: "/news" },
        { label: t("gallery"), href: "/gallery" },
        { label: t("publications"), href: "/publications" },
      ],
    },
    {
      title: t("contactUs"),
      self: "/contactus",
      links: [],
    },
  ];

  return sitemap;
};
