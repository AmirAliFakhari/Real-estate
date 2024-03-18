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
                reg: "نوع معامله",

            },
            {
                id: 2,
                title: "نوع ملک",
                type: "text",
                name: "input2",
                placeholder: "لطفاً نوع ملک را وارد کنید",
                value: "تجاری",
                reg: "نوع ملک",
            },
            {
                id: 3,
                title: "رهن",
                type: "number",
                name: "input3",
                placeholder: "مثلاً ۵۰ میلیون تومان",
                value: "۵۰ میلیون",
                currency: "میلیون تومان",
                reg: "رهن",
            },
            {
                id: 4,
                title: "اجاره",
                type: "number",
                name: "input4",
                placeholder: "مثلاً ۲ میلیون تومان",
                value: "۲۰ میلیون",
                currency: "میلیون تومان",
                reg: "اجاره",
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
                reg: "شهر",

            },
            {
                id: 6,
                title: "منطقه",
                type: "text",
                name: "منطقه",
                placeholder: "لطفاً منطقه مورد نظر رانتخاب کنید",
                value: "احمد آباد",
                reg: "منطقه",
            },
            {
                id: 7,
                title: "خیابان اصلی",
                type: "text",
                name: "خیابان اصلی",
                placeholder: "آدرس خود را وارد کنید",
                value: "جی ",
                reg: "خیبان اصلی",
            },
            {
                id: 8,
                title: "خیابان فرعی/کوچه",
                type: "text",
                name: "خیابان فرعی/کوچه",
                placeholder: "جزئیات آدرس را وارد کنید",
                value: "قاصدک",
                reg: "خیابان فرعی/کوچه",
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
                reg: "متراژ(متر مربع)",

            },
            {
                id: 10,
                title: "اتاق",
                type: "text",
                name: "اتاق",
                placeholder: "تعداد اتاق‌ها را بنویسید",
                value: "3",
                reg: "اتاق",
            },
            {
                id: 11,
                title: "طبقه",
                type: "text",
                name: "طبقه",
                placeholder: "طبقه ملک خود را بنویسید",
                value: "۳",
                reg: "طبقه",
            },
            {
                id: 12,
                title: "تعداد طبقات",
                type: "text",
                name: "تعداد طبقات",
                placeholder: "طبقه ملک خود را بنویسید",
                value: "۲۰ میلیون",
                currency: "میلیون تومان",
                reg: "تعداد طبقات",
            },
        ],
    },

];

export default stepsData;