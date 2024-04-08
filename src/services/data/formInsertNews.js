const inputFields = [
    {
        key: "1",
        title: "نام خبر",
        type: "text",
        name: "title",
        textholder: "نام خود را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the title",
            },
        },
    },
    {
        key: "2",
        title: "توضیح کوتاه",
        type: "text",
        name: "subtitle",
        textholder: "توضیح کوتاهی را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the subtitle",
            },
        },
    },
    {
        key: "3",
        title: "توضیح",
        type: "text",
        name: "text",
        textholder: "توضیحی را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the text",
            },
        },
    },
    {
        key: "4",
        title: "دسته بندی",
        type: "radio",
        name: "type1",
        options: [
            { label: "مسکن", value: "maskan" },
            { label: "ساخت و ساز", value: "sakht" },
            { label: "اجاره", value: "rent" },
        ],
        textholder: "دسته بندی را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the type1",
            },
        },
    },
    {
        key: "5",
        title: "دسته بندی قرار گیری ",
        type: "radio",
        name: "type2",
        options: [
            { label: "بزرگ", value: "Big" },
            { label: "کوچک", value: "Small" },
        ],
        textholder: "دسته بندی را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the type2",
            },
        },
    },
    {
        key: "6",
        title: "زمان مطالعه",
        type: "text",
        name: "time",
        textholder: "زمان مطالعه را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the time",
            },
        },
    },
    {
        key: "7",
        title: "تصویر اصلی خبر ",
        type: "file",
        name: "img",
        textholder: "تصویر اصلی را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the img",
            },
        },
    },
    {
        key: "8",
        title: "تصویر خبر ",
        type: "file",
        name: "picture",
        textholder: "تصویر  را وارد کنید",
        validation: {
            required: {
                value: true,
                message: "Please complete the picture",
            },
        },
    },
    {
        key: "9",
        title: "خبر مهم",
        type: "checkbox",
        name: "isTopNews",
        textholder: "خبر مهم را وارد کنید",
        validation: {
            required: {
                // value: tسrue,
                message: "Please complete the isTopNews",
            },
        },
    },

];

export default inputFields