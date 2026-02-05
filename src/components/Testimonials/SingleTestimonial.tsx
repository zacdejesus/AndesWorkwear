import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, designation, content, image, star } = testimonial;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-8 rounded-[20px] bg-white p-9 shadow-lg dark:bg-dark-2 md:px-7 xl:px-9">
          <div className="mb-7 flex items-center gap-3">
            {[...Array(star)].map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="fill-current text-yellow-500"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {content}
          </p>
          <div className="flex items-center gap-4">
            <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt={name} width={50} height={50} />
            </div>
            <div>
              <h5 className="text-sm font-semibold text-dark dark:text-white">
                {name}
              </h5>
              <p className="text-xs text-body-color dark:text-dark-6">
                {designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
