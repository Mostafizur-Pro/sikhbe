const HeroFAQ = () => {
  return (
    <section className="container mx-auto lg:px-6 px-3 bg-gray-900 rounded-3xl py-16">
      <div className="flex items-center">
        <div className="w-[40%] text-5xl font-bold text-[#b154f0]">
          Frequently Asked Questions
        </div>
        <div className="join join-vertical w-[60%]">
          {/* FAQ Item 1 */}
          <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-3xl font-medium text-[#b154f0]">
              এই কোর্সটি কাদের জন্য উপযুক্ত?
            </div>
            <div className="collapse-content text-2xl text-white">
              <p>
                {/* <hr className="my-5" /> */}
                যারা একদম শূন্য থেকে শুরু করে ওয়েব ডেভেলপমেন্ট শিখে ওয়েব
                ডেভেলপার হিসেবে ক্যারিয়ার গড়তে চান, তাদের জন্য এই কোর্সটি
                উপযুক্ত। সিএসই বা নন-সিএসই যেকোনো ব্যাকগ্রাউন্ডের শিক্ষার্থীই এই
                কোর্সে জয়েন করতে পারেন যদি তারা সত্যিকারের আগ্রহী এবং কঠোর
                পরিশ্রম করতে প্রস্তুত থাকেন।
              </p>
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-3xl font-medium text-[#b154f0]">
              কোর্স করার জন্য কি পূর্বে কোনো অভিজ্ঞতা দরকার?
            </div>
            <div className="collapse-content text-2xl text-white">
              <p>
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
          {/* FAQ Item 3 */}
          <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-3xl font-medium text-[#b154f0]">
              কোর্সে কি কি অন্তর্ভুক্ত আছে?
            </div>
            <div className="collapse-content text-2xl text-white">
              <p>
                {/* <hr className="my-5" /> */}
                এই কোর্সে ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই
                অন্তর্ভুক্ত আছে। HTML, CSS থেকে শুরু করে Bootstrap, JavaScript,
                Git, ES6, REST API, Server, JSON, React, Advanced React, Node,
                Database (MongoDB), Debug, Problem Solving, Interview Questions
                সহ আরও অনেক কিছু শেখানো হবে। এছাড়াও, কোর্সে ১3টি ওয়েবসাইট বানানো
                শেখানো হবে এবং ১3টি ওয়েবসাইট থাকবে হোমওয়ার্ক হিসেবে।
              </p>
            </div>
          </div>
          {/* FAQ Item 4 */}
          <div className="collapse collapse-arrow join-item border border-[#b154f0] mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-3xl font-medium text-[#b154f0]">
              এই কোর্সে কি WordPress বা Freelancing সম্পর্কিত কিছু আছে?
            </div>
            <div className="collapse-content text-2xl text-white">
              <p>
                {/* <hr className="my-5" /> */}
                এই কোর্সে সরাসরি WordPress বা Freelancing নিয়ে কিছু নেই। এই
                কোর্সের মূল উদ্দেশ্য হচ্ছে সফটওয়্যার কোম্পানিতে ওয়েব ডেভেলপার
                হিসেবে কাজ করার জন্য প্রস্তুত করা। তবে, এডভান্সড লেভেলে
                WordPress কাস্টমাইজ করতে HTML, CSS, JavaScript এবং React জানা
                লাগে, যা এই কোর্সে শেখানো হবে।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="/faq">
          <button className="btn btn-outline border-[#b154f0] text-xl text-[#b154f0]">
            আরো দেখুন
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroFAQ;
