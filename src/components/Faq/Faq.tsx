import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="container mx-auto lg:px-6 px-3  rounded-3xl py-16">
        <div className="w-[60%] mx-auto">
          <div className="join join-vertical ">
            {/* FAQ Item 1 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                এই কোর্সটি কাদের জন্য উপযুক্ত?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  যারা একদম শূন্য থেকে শুরু করে ওয়েব ডেভেলপমেন্ট শিখে ওয়েব
                  ডেভেলপার হিসেবে ক্যারিয়ার গড়তে চান, তাদের জন্য এই কোর্সটি
                  উপযুক্ত। সিএসই বা নন-সিএসই যেকোনো ব্যাকগ্রাউন্ডের শিক্ষার্থীই
                  এই কোর্সে জয়েন করতে পারেন যদি তারা সত্যিকারের আগ্রহী এবং কঠোর
                  পরিশ্রম করতে প্রস্তুত থাকেন।
                </p>
              </div>
            </div>
            {/* FAQ Item 2 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                পড়ালেখা ও পরীক্ষার পাশাপাশি আমি কি এই কোর্স করতে পারবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  আপনি যদি ভার্সিটির অত্যন্ত মেধাবী ছাত্র হন এবং আপনার জিপিএ 4.0
                  বা তার বেশি হয়, তবে এটি কিছুটা চ্যালেঞ্জিং হতে পারে। তবে, আপনি
                  যদি সাধারণ ছাত্র হন তাহলে পড়ালেখার পাশাপাশি এই কোর্স সহজেই শেষ
                  করতে পারবেন। পরীক্ষার সময় ২-৩টি অ্যাসাইনমেন্ট দেরিতে জমা
                  দিলেও SCIC থেকে বাদ পড়বেন না। আমাদের স্টুডেন্ট কেয়ার টিম
                  আপনাকে রুটিন বানাতে এবং গাইডলাইন দিয়ে সাহায্য করবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 3 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                নন-সিএসই বা নন-সায়েন্স ব্যাকগ্রাউন্ডের শিক্ষার্থীরা কি ওয়েব
                ডেভেলপমেন্টে সফল হতে পারবে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  অবশ্যই। বর্তমান সময়ে অনেক ওয়েব ডেভেলপমেন্ট চাকরিতে নির্দিষ্ট
                  ব্যাকগ্রাউন্ডের প্রয়োজন হয় না। আমাদের অনেক স্টুডেন্ট যারা
                  নন-সিএসই ব্যাকগ্রাউন্ড থেকে এসেছেন, তারা সফলভাবে চাকরি বা
                  ইন্টার্নশিপ পেয়েছেন। তবে, নন-সিএসই ব্যাকগ্রাউন্ড থেকে আসলে
                  আপনাকে একটু বেশি পরিশ্রম করতে হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                পড়াশোনার পাশাপাশি আমি কি চাকরি বা ইন্টার্নশিপ করতে পারবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  হ্যাঁ, বিশেষ করে রিমোট ইন্টার্নশিপ বা জব করতে পারবেন। তবে,
                  আপনাকে ভার্সিটির পড়ালেখার সাথে সামঞ্জস্য রেখে কাজ করতে হবে।
                  কিছু অভিজ্ঞতা অর্জন করলে সেটা ভবিষ্যতে কাজে লাগবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 5 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্স করার জন্য কি পূর্বে কোনো অভিজ্ঞতা দরকার?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  না, কোনো পূর্ব অভিজ্ঞতা প্রয়োজন নেই। আমরা শূন্য থেকে শেখাচ্ছি।
                  তবে, কিছু বেসিক জ্ঞান থাকা ভালো, যেমন:
                  <ul className="my-2">
                    <li>• কম্পিউটার চালানোর অভিজ্ঞতা (৬ মাস থেকে ১ বছর)</li>
                    <li>• ইন্টারনেট থেকে তথ্য খুঁজে বের করার ক্ষমতা</li>
                    <li>• বেসিক ইংরেজি পড়তে এবং বুঝতে পারার ক্ষমতা</li>
                    <li>• টাইপিং করার সামর্থ্য (১৫-৩০ wpm স্পিড হলে ভালো)</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* FAQ Item 6 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                এই কোর্স করার জন্য কোনো বিশেষ শিক্ষাগত যোগ্যতা প্রয়োজন?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  কোর্সটি এমনভাবে ডিজাইন করা হয়েছে যাতে যে কেউ যেকোনো একাডেমিক
                  ব্যাকগ্রাউন্ড থেকে করতে পারে। আপনি ভার্সিটির ছাত্র, চাকরিজীবী,
                  বেকার, প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা হলেও এই কোর্স
                  করতে পারবেন।
                </p>
              </div>
            </div>
            {/* FAQ Item 7 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্স শেষ করতে কতদিন লাগবে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  প্রতিদিন ১ থেকে দেড় ঘণ্টা ভিডিও দেখলে এবং ৪ থেকে ৬ ঘণ্টা
                  প্রাকটিস করলে ৫ মাসের মতো সময় লাগবে। হোমওয়ার্ক এবং টেক এওয়ে
                  প্রজেক্টের জন্য বাড়তি সময় রাখতে হবে। হার্ডওয়ার্ক করার মানসিকতা
                  নিয়ে আসতে হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 8 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্সে কি কি অন্তর্ভুক্ত আছে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  এই কোর্সে ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই
                  অন্তর্ভুক্ত আছে। HTML, CSS থেকে শুরু করে Bootstrap,
                  JavaScript, Git, ES6, REST API, Server, JSON, React, Advanced
                  React, Node, Database (MongoDB), Debug, Problem Solving,
                  Interview Questions সহ আরও অনেক কিছু শেখানো হবে। এছাড়াও,
                  কোর্সে ১3টি ওয়েবসাইট বানানো শেখানো হবে এবং ১3টি ওয়েবসাইট থাকবে
                  হোমওয়ার্ক হিসেবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 9 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্সের ভিডিও গুলো কিভাবে পাবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  কোর্সের ভিডিও প্রি-রেকর্ডেড থাকবে। এনরোল করার পর প্রতিদিন একটি
                  করে মডিউল দেয়া হবে। প্রতিটি মডিউলে ১০ থেকে ১২টি ভিডিও থাকবে যা
                  দেখতে হবে। প্রতিদিন ডেডিকেটেড সময় রাখতে হবে এবং সেই সময়ের
                  মধ্যে ভিডিওগুলো দেখতে হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 10 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্সে কি কি অন্তর্ভুক্ত আছে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  মিনিমাম কনফিগারেশন:
                  <ul className="my-2">
                    <li>• Storage: 128GB SSD</li>
                    <li>• Processor: Core i3 8th Gen</li>
                    <li>• RAM: 8GB</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* FAQ Item 11 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                এনরোলমেন্টে সমস্যা হলে কি করবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  আমাদের ইমেইল করুন: web@programming-hero.com এ বিস্তারিত লিখে
                  স্ক্রিনশট সহ। আমরা ২৪ ঘন্টার মধ্যে রিপ্লাই দেবো। এছাড়া
                  ওয়েবসাইটের নিচে দেয়া ফোন নাম্বারে কল করেও সাহায্য চাইতে পারেন।
                </p>
              </div>
            </div>
            {/* FAQ Item 12 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                এই কোর্সে কি WordPress বা Freelancing সম্পর্কিত কিছু আছে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  এই কোর্সে সরাসরি WordPress বা Freelancing নিয়ে কিছু নেই। এই
                  কোর্সের মূল উদ্দেশ্য হচ্ছে সফটওয়্যার কোম্পানিতে ওয়েব ডেভেলপার
                  হিসেবে কাজ করার জন্য প্রস্তুত করা। তবে, এডভান্সড লেভেলে
                  WordPress কাস্টমাইজ করতে HTML, CSS, JavaScript এবং React জানা
                  লাগে, যা এই কোর্সে শেখানো হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 13 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্স ফলো করতে গিয়ে আটকে গেলে কি করবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  কোর্সের জন্য একটি সিক্রেট ফেইসবুক গ্রুপ আছে যেখানে আমরা, ২৭ জন
                  প্রফেশনাল ওয়েব ডেভেলপার এবং অন্যান্য টিম মেম্বাররা সাহায্য
                  করবেন। গড়ে ২-৩ ঘন্টার মধ্যে সব প্রশ্নের উত্তর পাবেন।
                  স্ক্রিনশেয়ার করে সমস্যার সমাধান করা হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 14 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                আরো কোনো প্রশ্ন থাকলে কোথায় জিজ্ঞেস করব?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  আপনার যে কোনো প্রশ্ন web@programming-hero.com এ পাঠিয়ে দিন।
                  আমরা ২৪ ঘন্টার মধ্যে উত্তর দেবো।
                </p>
              </div>
            </div>
            {/* FAQ Item 15 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্সটি করতে সময় কম লাগাতে হলে কি করা উচিত?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  প্রতিদিন নির্দিষ্ট সময় ধরে পড়াশোনা করলে কোর্সটি কম সময়ে শেষ
                  করা যাবে। সময়মত হোমওয়ার্ক ও অ্যাসাইনমেন্ট জমা দেওয়া উচিত।
                  এছাড়াও, প্রতিদিন কিছুটা সময় অনুশীলনে ব্যয় করা উচিত।
                </p>
              </div>
            </div>
            {/* FAQ Item 16 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্সের শেষে কি কোনো সার্টিফিকেট দেয়া হবে?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  হ্যাঁ, কোর্স সফলভাবে সম্পন্ন করার পরে একটি সার্টিফিকেট প্রদান
                  করা হবে যা আপনার দক্ষতা ও জ্ঞানকে স্বীকৃতি দেবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 17 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                স্টুডেন্ট থাকা অবস্থায় কি চাকরি/ইন্টার্নশিপ করতে পারব?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  অবশ্যই পারবেন। বিশেষ করে রিমোট ইন্টার্নশিপ বা জব করতে পারবেন।
                  তবে, ভার্সিটির পড়ালেখার সাথে সামঞ্জস্য রেখে কাজ করতে হবে। কিছু
                  অভিজ্ঞতা অর্জন করলে সেটা ভবিষ্যতে কাজে লাগবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 18 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                কোর্স চলাকালে কোনও সমস্যায় পড়লে কি করবো?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  আমরা কোর্সের জন্য একটি সিক্রেট ফেইসবুক গ্রুপ তৈরি করেছি যেখানে
                  আপনি যেকোনো সমস্যার সমাধান পাবেন। এছাড়াও, স্ক্রিনশেয়ার করে
                  আপনার সমস্যা সমাধান করা হবে।
                </p>
              </div>
            </div>
            {/* FAQ Item 4 */}
            <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-3xl font-medium text-[#b154f0]">
                এই কোর্সটি কি কেবল নতুনদের জন্য?
              </div>
              <div className="collapse-content text-2xl text-white text-justify">
                <p className="m-3">
                  {/* <hr className="my-5" /> */}
                  না, এই কোর্সটি নতুনদের জন্য উপযুক্ত হলেও যারা আগে থেকে কিছু
                  জানেন তারাও অনেক কিছু শিখতে পারবেন। বিশেষ করে যারা নিজেদের
                  স্কিল আপগ্রেড করতে চান, তাদের জন্যও এই কোর্সটি উপযুক্ত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
