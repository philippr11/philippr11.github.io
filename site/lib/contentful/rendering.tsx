import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Key } from 'react';
import { getAssetFromId } from './assets';
import Image from 'next/image';

export async function getRichTextFormattingOptions(locale: string) {
    return {
        renderMark: {
            [MARKS.BOLD]: (text: any) => <span className="font-bold">{text}</span>,
            [MARKS.ITALIC]: (text: any) => <span className="italic">{text}</span>,
            [MARKS.UNDERLINE]: (text: any) => <span className="underline">{text}</span>,
            [MARKS.CODE]: (text: any) => <span className="font-light ">{text}</span>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
                return (
                    <div className="mb-8">{children}</div>
                )
            },
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
                return (
                    <li className="list-item group-[.list-none]:marker:[content:'-'] [counter-increment:listnumber] group-[.unordered]:marker:[content:counters(listnumber,'.')] marker:text-accent px-4">{children}</li>
                )
            },
            [BLOCKS.DOCUMENT]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.HEADING_1]: (node: any, children: any) => {
                return (
                    <div className="text-6xl font-bold pb-4">{children}</div>
                )
            },
            [BLOCKS.HEADING_2]: (node: any, children: any) => {
                return (
                    <div className="text-3xl font-bold pb-3">{children}</div>
                )
            },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
                return (
                    <div className="text-lg font-bold pb-2">{children}</div>
                )
            },
            [BLOCKS.HEADING_4]: (node: any, children: any) => {
                return (
                    <div className="font-bold">{children}</div>
                )
            },
            [BLOCKS.HEADING_5]: (node: any, children: any) => {
                return (
                    <div className="underline">{children}</div>
                )
            },
            [BLOCKS.HEADING_6]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.UL_LIST]: (node: any, children: any) => {
                return (
                    <ul className="list-none group">{children}</ul>
                )
            },
            [BLOCKS.OL_LIST]: (node: any, children: any) => {
                return (
                    <ol className="unordered [counter-reset:listnumber] group">{children}</ol>
                )
            },
            [BLOCKS.QUOTE]: (node: any, children: any) => {
                return (
                    <div className="flex flex-col">
                        <div className="flex flex-row w-full justify-between"><div className="h-px bg-text/25 w-2/5 mt-2"></div><div className="font-bold align-text-top">&quot;</div><div className="h-px bg-text/25 w-2/5 mt-2"></div></div>
                        <div className="text-center align-middle italic font-light font-serif -mb-8">{children}</div>
                        <div className="flex flex-row w-full justify-between"><div className="h-px bg-text/25 w-2/5 mt-2"></div><div className="font-bold align-text-top">&quot;</div><div className="h-px bg-text/25 w-2/5 mt-2"></div></div>
                    </div>
                )
            },
            [BLOCKS.HR]: (node: any, children: any) => {
                return (
                    <div className="h-px bg-text/25 w-full">{children}</div>
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.EMBEDDED_ASSET]: async (node: any, children: any) => {
                const asset = await getAssetFromId(node.data.target.sys.id, locale);
                return (
                    <Image className="rounded mb-5" src={asset.url} width={asset.width} height={asset.height} alt={asset.description} />
                )
            },
            [BLOCKS.EMBEDDED_RESOURCE]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.TABLE]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.TABLE_ROW]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.TABLE_CELL]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [INLINES.EMBEDDED_RESOURCE]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [INLINES.HYPERLINK]: (node: any, children: any) => {
                return (
                    <a className="text-primary cursor-pointer" href={node.data.uri}>{children}</a>
                )
            },
            [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [INLINES.RESOURCE_HYPERLINK]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [INLINES.ASSET_HYPERLINK]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
        },
        renderText: (text: any) => {
            return text.split('\n').reduce((children: any, textSegment: any, index: Key | null | undefined) => {
                return [...children, (index as number) > 0 && <br key={index} />, textSegment];
            }, []);
        },
    };
}