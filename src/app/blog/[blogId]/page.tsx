const DynamicBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-2xl">This is Dynamic Blog Page component {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;
