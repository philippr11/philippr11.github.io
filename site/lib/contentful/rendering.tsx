import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

export function getRichTextFormattingOptions() {
    return {
        renderMark: {
            [MARKS.BOLD]: (text:any) => <div className="text-bold">{text}</div>,
            [MARKS.ITALIC]: (text:any) => <div className="text-semibold">{text}</div>,
            [MARKS.UNDERLINE]: (text:any) => <p className="underline">{text}</p>,
            [MARKS.CODE]: (text:any) => <div className="text-bold">{text}</div>,
          },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
                return (
                    <div className="pb-5">{children}</div>
                )
            },
            [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
                return (
                    <li className="">{children}</li>
                )
            },
            [BLOCKS.DOCUMENT]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.HEADING_1]: (node: any, children: any) => {
                return (
                    <div className="text-xl font-bold pb-4">{children}</div>
                )
            },
            [BLOCKS.HEADING_2]: (node: any, children: any) => {
                return (
                    <div className="text-lg font-bold pb-3">{children}</div>
                )
            },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
                return (
                    <div className="text-lg underline pb-2">{children}</div>
                )
            },
            [BLOCKS.HEADING_4]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.HEADING_5]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.HEADING_6]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.UL_LIST]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.OL_LIST]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.QUOTE]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.HR]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
                return (
                    <div className="">{children}</div>
                )
            },
            [BLOCKS.EMBEDDED_RESOURCE]: (node: any, children: any) => {
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
                    <div className="">{children}</div>
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
        }
    };
}