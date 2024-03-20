const stepsData = [
    {
        inputs: [
            {
                id: 1,
                title: "نوع معامله",
                type: "text",
                name: "نوع معامله",
                placeholder: "لطفاً نوع معامله ر را وارد کنید",
                value: "قسطی",
                reg: "transaction_type",

            },
            {
                id: 2,
                title: "نوع ملک",
                type: "text",
                name: "input2",
                placeholder: "لطفاً نوع ملک را وارد کنید",
                value: "تجاری",
                reg: "type_land",
            },
            {
                id: 3,
                title: "رهن",
                type: "number",
                name: "input3",
                placeholder: "مثلاً ۵۰ میلیون تومان",
                value: "50000000",
                currency: "میلیون تومان",
                reg: "mortgage",
            },
            {
                id: 4,
                title: "اجاره",
                type: "number",
                name: "input4",
                placeholder: "مثلاً ۲ میلیون تومان",
                value: "20000000",
                currency: "میلیون تومان",
                reg: "rent",
            },
        ],
    },
    {
        inputs: [
            {
                id: 5,
                title: "شهر",
                type: "text",
                name: "شهر",
                placeholder: "لطفاً شهر مورد نظر را انتخاب کنید",
                value: "اصفهان",
                reg: "city",

            },
            {
                id: 6,
                title: "منطقه",
                type: "text",
                name: "منطقه",
                placeholder: "لطفاً منطقه مورد نظر رانتخاب کنید",
                value: "احمد آباد",
                reg: "state",
            },
            {
                id: 7,
                title: "خیابان اصلی",
                type: "text",
                name: "خیابان اصلی",
                placeholder: "آدرس خود را وارد کنید",
                value: "جی ",
                reg: "street",
            },
            {
                id: 8,
                title: "خیابان فرعی/کوچه",
                type: "text",
                name: "خیابان فرعی/کوچه",
                placeholder: "جزئیات آدرس را وارد کنید",
                value: "قاصدک",
                reg: "auxiliary_road",
            },
        ],
    },
    {
        inputs: [
            {
                id: 9,
                title: "متراژ(متر مربع)",
                type: "number",
                name: "متراژ(متر مربع)",
                placeholder: "مساحت ملک خود را وارد کنید",
                value: "متراژ(متر مربع)",
                reg: "area",

            },
            {
                id: 10,
                title: "اتاق",
                type: "text",
                name: "اتاق",
                placeholder: "تعداد اتاق‌ها را بنویسید",
                value: "3",
                reg: "room",
            },
            {
                id: 11,
                title: "طبقه",
                type: "text",
                name: "طبقه",
                placeholder: "طبقه ملک خود را بنویسید",
                value: "3",
                reg: "floor",
            },
            {
                id: 12,
                title: "تعداد طبقات",
                type: "text",
                name: "تعداد طبقات",
                placeholder: "طبقه ملک خود را بنویسید",
                value: "20000000",
                currency: "میلیون تومان",
                reg: "number_floors",
            },
        ],
    },

];

export default stepsData;