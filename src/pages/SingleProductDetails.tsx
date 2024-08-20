import ImageMagnifier from "@/components/ImageMagnifier";

const SingleProductDetails = () => {
  return (
    <>
      <ImageMagnifier
        src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg"
        width={300}
        height={200}
        magnifierHeight={100}
        magnifierWidth={100}
        zoomLevel={2}
        alt="Sample Image"
      />
    </>
  );
};

export default SingleProductDetails;
