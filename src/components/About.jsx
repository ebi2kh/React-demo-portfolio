import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">درباره</h1>
        <p>
          سلام، من علی هستم، یک توسعه‌دهنده وب پرشور با چشم انداز حرفه‌ای برای
          MERN Stack. با سابقه‌ای در IT، من سعی می‌کنم راه‌حل‌های نرم‌افزاری
          تاثیرگذار و بصری شگفت‌انگیز ایجاد کنم که یک اثر ماندگار بگذارد.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">تحصیلات</h1>
        <span>
          مدرک کارشناسی ارشد، دانشگاه تهران، ۱۳۹۹ مدرک کارشناسی، دانشگاه شیراز،
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          مهارت‌ها و تخصص
        </h1>
        <span>
          ماهر در JavaScript, Python, و Java تجربه با React.js, Express.js,
          MongoDB, و Node.js درک قوی از اصول طراحی وب و UX مهارت حل مسئله عالی
          ارتباطات موثر و همکاری.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">تجربه حرفه‌ای</h1>
        <span>
          توسعه‌دهنده ارشد، شرکت ۱، ۱۴۰۰-۱۴۰۲ توسعه‌دهنده جونیور،۲ شرکت
          ۱۳۹۸-۱۴۰۰ فری لنسر، پروژه‌های مختلف، ۱۳۹۶-۱۳۹۸
        </span>
        <br />
        <br />
        {/* <h1 className="text-green-600 font-semibold text-xl">
          دستاوردها و جوایز
        </h1>
        <span>
          جایزه بهترین توسعه‌دهنده سال، شرکت آمازون، ۱۴۰۱ دستاورد برتر در
          هکاتون، دانشگاه تهران، ۱۳۹۹
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">بیانیه ماموریت</h1>
        <p>
          ماموریت من استفاده از مهارت‌ها و خلاقیت برای ارائه راه‌حل‌های نوآورانه
          توسعه وب است که انتظارات مشتری را برآورده کند و به منظر دیجیتال مثبت
          کمک کند. من به یادگیری و رشد مداوم متعهد هستم، همیشه به دنبال چالش‌ها
          و فرصت‌های جدید برای گسترش افق‌های خود هستم.
        </p>
      </div>
    </div>
  );
}

export default About;
