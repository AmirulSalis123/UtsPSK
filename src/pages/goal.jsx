
import Card2 from "../components/Elements/Card/Index2";
import Card3 from "../components/Elements/Card/index3";
import Card4 from "../components/Elements/Card/index4";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
  return (
    <MainLayout type="goal">
      {/* top content start*/}
      <div className="text-base text-gray-02 mb-2"><h1>GOAL</h1></div>
      <div className="mb-2 sm:flex sm:gap-2">
        <div className=" md:grid md:grid-cols-1 sm:w-1/2">
          <Card3 />
        </div>
        <div className="sm:w-1/2">
          <Card2 />
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="text-base text-gray-02 mb-2"><h1>Expense Goal By Category</h1></div>
      <div className="mb-4 sm:flex sm:gap-5">
        
        <div className=" md:grid md:grid-cols-1  sm:w-1/3">
          <Card3 />
        </div>
        <div className=" md:grid md:grid-cols-1 sm:w-1/3">
          <Card4 />
        </div>
        <div className="  md:grid md:grid-cols-1 sm:w-1/3">
          <Card2 />
        </div>
        </div>
        <div className="mb-8 sm:flex sm:gap-6">
        <div className="  md:grid md:grid-cols-1 sm:w-1/3">
          <Card3 />
        </div>
        <div className=" md:grid md:grid-cols-1 sm:w-1/3">
          <Card2 />
        </div>
        <div className="  md:grid md:grid-cols-1 sm:w-1/3">
          <Card3 />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default GoalPage;