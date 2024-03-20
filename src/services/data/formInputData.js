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
    {
        inputs: [
            {
                id: 13,
                title: "پارکنیگ",
                type: "text",
                name: "پارکنیگ",
                placeholder: "تعداد پارکینگ رو وارد کن ",
                value: "۱ پارکینگ",
                reg: "پارکینگ",

            },
            {
                id: 14,
                title: "سرویس بهداشتی",
                type: "text",
                name: "سرویس بهداشتی",
                placeholder: "تعداد سرویس بهداشتی رو وارد کن",
                value: "۲ سرویس",
                reg: "سرویس بهداشتی",
            },
            {
                id: 15,
                title: "انباری",
                type: "text",
                name: "انباری",
                placeholder: "تعداد انباری رو وارد کن",
                value: "۱ انباری",
                reg: "انباری",
            },
            {
                id: 16,
                title: "نوع سرویس بهداشتی",
                type: "text",
                name: "نوع سرویس بهداشتی",
                placeholder: "نوع سرویش بهداشتی رو وارد کن",
                value: "فرنگی",
                reg: "نوع سرویس بهداشتی",
            },
            {
                id: 17,
                title: "آسانسور",
                type: "text",
                name: "آسانسور",
                placeholder: "تعداد آسانسور رو وارد کن",
                value: "۲ آسانسور",
                reg: "آسانسور",
            },
            {
                id: 18,
                title: "سیستم سرمایش",
                type: "text",
                name: "سیستم سرمایش",
                placeholder: "تعداد آسانسور رو وارد کن",
                value: "کولر آبی",
                reg: "سیستم سرمایش",
            },
            {
                id: 19,
                title: "جنس کف",
                type: "text",
                name: "سیستم سرمایش",
                placeholder: "جنس کف رو وارد کن",
                value: "سرامیک",
                reg: "جنس کف",
            },
            {
                id: 20,
                title: "سیستم گرمایش",
                type: "text",
                name: "سیستم سرمایش",
                placeholder: "سیستم گرمایش رو وارد کن",
                value: "شوفاژ",
                reg: "سیستم گرمایش",
            },
        ],
    },

];

export default stepsData;