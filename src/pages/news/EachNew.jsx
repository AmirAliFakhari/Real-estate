import { useParams } from "react-router-dom";
import useEachNews from "./useEachNew";

function EachNew() {
  const { idNews } = useParams();
  const { isLoading, data } = useEachNews({ idNews });
  return (
    <div className="relative left-0 top-[80px]">
      <div className="flex  flex-col items-center  ">
        <div className="mb-5 flex w-[85%] flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold">
              {!isLoading && data[0]?.title}
            </span>
            <span className="text-base font-semibold">
              فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ
              فروشندگان
            </span>
          </div>
          <div className="flex gap-5  ">
            <span className="w-fit rounded-md bg-slate-100 p-1 text-sm">
              زمان مطلاعه 5 دقیقه
            </span>
            <div className="flex w-fit flex-wrap items-center justify-center rounded-md bg-gray-100 p-1">
              <span className="text-sm">20 بهمن</span>
              <img src="src\assets\icons\calendar.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex  justify-center">
          <img
            className="w-[85%]"
            src="src\assets\imgs\new-photo3.svg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center px-2">
        <div className="grid w-[85%] grid-cols-3 gap-5">
          <div className="col-span-full flex flex-col gap-10 lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-semibold">
                رکود بازار مسکن چقدر طول میکشد؟
              </span>
              <p className="text-justify">
                یک کارشناس مسکن همچنین در مورد خروج بازار از رکود توضیح داد: «
                اگر بازار مسکن قصد احیای خود را داشته باشد، شرط آن فعال بودن
                سایر بازارهای موازی است. پس از اینکه این بازارها رشد کردند، مسکن
                نیز از رکود خارج می‌شود.» وی همچنین بیان کرد: «نکته‌ای که اکنون
                می‌توان به آن اشاره کرد این است که مسکن به نوعی رکود و نظام قهری
                از سوی سرمایه‌گذاران و مصرف‌کنندگان رسیده است. مطالعات میدانی
                نشان می‌دهد حتی اگر فروشنده بخواهد قیمت را به‌صورت دلخواه کاهش
                دهد، باز هم مخاطبی وجود ندارد تا با آن قیمت تحریک شود.»
              </p>
            </div>
            <div className="flex flex-col ">
              <span className="font-semibold">
                رکود بازار مسکن چقدر طول میکشد؟
              </span>
              <p className="text-justify">
                در حال حاضر، بازار مسکن با رکود عمیقی مواجه است و تعداد معاملات
                آن در تهران که در دوره رکودی ابتدای دهه ۹۰ به محدود ۹ تا ۱۰ هزار
                معامله در ماه رسیده بود، حالا روی رقم ۳ هزار معامله در ماه
                ایستاده است. در حقیقت، در شرایط فعلی اقتصاد ایران به دلیل کنترل
                نرخ ارز و کاهش سرعت گردش پول، دورنمای تورمی کوتاه مدتی که
                سرمایه‌گذاران را به بازار املاک جذب کند وجود ندارد و متقاضیان
                مصرفی نیز متاسفانه توانی برخی خرید ملک ندارند. بازار مسکن در
                تابستان امسال در سه ماه متوالی شاهد تورم منفی بوده و آنگونه که
                آمارهای رسمی نشان می‌دهد، در مهرماه نیز با وجود رشد اندک قیمت،
                از منظر تعداد معاملات همچنان کساد و راکد بوده است.از منظر فعالان
                بازار مسکن، وضعیت فعلی بازار پاسخی است به جهشهای متوالی قیمت در
                سال‌های گذشته و به واسطه رشد نجومی قیمت‌ها در این بازار، فعلا
                رغبتی برای خرید این کالای ضروری اما سرمایه‌ای وجود ندارد.
              </p>
              <img
                className="mt-5"
                src={!isLoading && `${data[0].picture}`}
                alt=""
              />
            </div>
            <div className="">
              <span className="font-semibold">
                رکود بازار مسکن چقدر طول میکشد؟
              </span>
              <p className="text-justify">
                یک کارشناس مسکن همچنین در مورد خروج بازار از رکود توضیح داد: «
                اگر بازار مسکن قصد احیای خود را داشته باشد، شرط آن فعال بودن
                سایر بازارهای موازی است. پس از اینکه این بازارها رشد کردند، مسکن
                نیز از رکود خارج می‌شود.» وی همچنین بیان کرد: «نکته‌ای که اکنون
                می‌توان به آن اشاره کرد این است که مسکن به نوعی رکود و نظام قهری
                از سوی سرمایه‌گذاران و مصرف‌کنندگان رسیده است. مطالعات میدانی
                نشان می‌دهد حتی اگر فروشنده بخواهد قیمت را به‌صورت دلخواه کاهش
                دهد، باز هم مخاطبی وجود ندارد تا با آن قیمت تحریک شود.»
              </p>
            </div>
          </div>
          <div className="lg:col-grid-1 col-span-full grid rounded-lg  bg-slate-50    lg:col-span-1 lg:h-[20rem] lg:overflow-y-scroll  ">
            <span className="ms-2 mt-5 flex font-bold">اخبار مرتبط</span>
            <div className="mx-2 mt-5 flex flex-col items-center justify-center rounded-lg bg-white">
              <img src="src\assets\imgs\photo-new4.svg" alt="" />
              <span className="w-fit rounded-md bg-red-100 p-1 text-sm">
                زمان مطلاعه 5 دقیقه
              </span>
              <p>رشد ۵۴ درصدی قیمت مسکن در رکود ۶۵ درصدی بازار</p>
            </div>
            <div className="mx-2 mt-5 flex flex-col items-center justify-center rounded-lg bg-white">
              <img src="src\assets\imgs\photo-new4.svg" alt="" />
              <span className="w-fit rounded-md bg-red-100 p-1 text-sm">
                زمان مطلاعه 5 دقیقه
              </span>
              <p>رشد ۵۴ درصدی قیمت مسکن در رکود ۶۵ درصدی بازار</p>
            </div>
            <div className="mx-2 mt-5 flex flex-col items-center justify-center rounded-lg bg-white">
              <img src="src\assets\imgs\photo-new4.svg" alt="" />
              <span className="w-fit rounded-md bg-red-100 p-1 text-sm">
                زمان مطلاعه 5 دقیقه
              </span>
              <p>رشد ۵۴ درصدی قیمت مسکن در رکود ۶۵ درصدی بازار</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachNew;
