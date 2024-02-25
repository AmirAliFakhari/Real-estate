import HomeCart from "../components/HomeCart";

const fakeData = [
  {
    title: "ALi",
    subtitle: "120 متر ",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "ALidsa",
    subtitle: "120 متر ",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "ALilas",
    subtitle: "120 متر ",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
  {
    title: "ALilajdsas",
    subtitle: "120 متر ",
    mortage: "600 میلیون رهن",
    monthPrice: "31 میلیون تومن اجاره",
    img: "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/sign/apartments/apartment.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcGFydG1lbnRzL2FwYXJ0bWVudC5zdmciLCJpYXQiOjE3MDg4NTQxMzAsImV4cCI6MTc0MDM5MDEzMH0.Qr3JSQvnVgP69Zlmgsa3zUVKPzrj-Yt6juFDCnz8TkA&t=2024-02-25T09%3A42%3A10.542Z",
  },
];

function RealStates() {
  return (
    <>
      <div className="flex flex-col w-full px-28 justify-between items-center mt-10  ">
        <div className="flex gap-24">
          <p className="font-semibold"> جدیدترین خانه‌های اجاره‌ای تهران </p>
          <span className="text-Gray-10-505050">مشاهده همه</span>
        </div>
        <div className="flex gap-5">
          {fakeData.map((data) => (
            <HomeCart
              key={data.title}
              homeImg={data.img}
              monthPrice={data.monthPrice}
              mortgage={data.mortage}
              subTitle={data.subtitle}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RealStates;
