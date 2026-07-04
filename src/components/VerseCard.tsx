import { images } from "../assets/images";
import SectionHeading from "./SectionHeading";

export default function VerseCard() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="This Week's Reflection" title="Weekly Qur'anic Verse" />
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl shadow-emerald-950/5 md:grid-cols-5">
          <img
            src={images.quran}
            alt="An open copy of the Qur'an"
            className="h-64 w-full object-cover md:col-span-2 md:h-full"
          />
          <div className="flex flex-col justify-center gap-4 p-8 md:col-span-3">
            <p className="font-display text-lg font-semibold text-emerald-950">Surah Al-Hujurat (49:13)</p>
            <p dir="rtl" className="font-display text-2xl leading-relaxed text-emerald-900">
              يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۗ إِنَّ
              أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۗ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ
            </p>
            <p className="text-sm italic text-emerald-700">
              Yā ayyuhā an-nāsu innā khalaqnākum min dhakarīn wa unthā wa jaʿalnākum shuʿūbān wa qabāʾilā
              litaʿārafū, inna akramakum ʿinda l-lāhi atqākum, inna l-lāha ʿalīmun khabīr.
            </p>
            <p className="text-emerald-800">
              "O mankind, indeed We have created you from male and female and made you peoples and tribes
              that you may know one another. Indeed, the most noble of you in the sight of Allah is the most
              righteous of you. Indeed, Allah is Knowing and Acquainted."
            </p>
            <p className="text-xs uppercase tracking-wide text-brass-600">Posted on: July 23, 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
