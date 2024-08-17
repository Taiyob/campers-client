import blog from "../../../assets/images/blog1.webp";

const AdvicingBlog = () => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-10">
      <h1 className="text-3xl font-extrabold text-center text-gray-500">
        Buy Your Camping Equipment Online with Camp & Climb
      </h1>
      <div className="mt-4">
        <p className="text-xl text-gray-700">
          <span className="font-bold">Camp and Climb</span> has been supplying
          South Africa with camping equipment for many years, and to date, we
          still offer a great range backed up by service excellence and friendly
          advice. As one of the top tent suppliers in South Africa, we stock
          everything you could possibly need, from quality leading brand names
          like Tentco, Stanley, Oztrail, Petzl, & Coleman. As one of SA’s top
          online camping stores, you are able to purchase a wide range of
          camping and climbing equipment and have it delivered to your doorstep
          nationwide.
        </p>
      </div>
      <h1 className="mt-5 text-3xl font-extrabold text-center text-gray-500">
        One of the Best Tent Suppliers in South Africa
      </h1>
      <div className="mt-4">
        <p className="text-xl text-gray-700">
          We stock a selection of durable canvas tents and lightweight nylon
          tents from great names such as Tentco and Oztrail to name a few. We
          don’t just stock camping equipment either. ‘Climb’ is literally the
          second half of our name! As one of South Africa’s leading outdoor
          stores, we stock an extensive collection of climbing gear and outdoor
          equipment, to empower you in your extreme outdoor adventures and
          sports. From bouldering to rock climbing, sports climbing to
          mountaineering , we’ve got you covered with world class climbing
          equipment for your trek to the top. And what’s more? Orders for
          camping & climbing gear above R750* value ship for free! Ts&Cs Apply
        </p>
      </div>
      <div className="">
        <div className="grid items-center justify-center grid-cols-2 gap-4 overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img className="w-full h-auto " src={blog} alt="Blog" />
          </div>

          {/* Text Content */}
          <div className="">
            <h2 className="mb-4 text-xl font-bold text-gray-500">
              Oztrail, Tentco, Petzl, Cadac and more
            </h2>
            <p className="text-xl text-gray-700">
              Enjoy the great outdoors with camping equipment and hiking gear
              from Camp and Climb, one of SA’s finest camping equipment stores.
              Our store offers a complete selection of
              4×4/climbing/hiking/camping equipment and supplies – All the
              equipment you need to venture out into the wilderness. Find all
              your camping equipment including camp tents, trailer tents,
              camping furniture, sleeping bags, outdoor cooking equipment,
              survival, and navigation equipment; online or in store. Visit us
              at our stores in Randburg, Centurion, Cape Town or Bellville where
              we offer all the camping equipment you could possibly need plus a
              great display of camping tents. Our friendly staff are outdoor
              enthusiasts themselves and are always happy to assist. Come on in
              and see for yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvicingBlog;
