"use client";

import AuthenticatedLayout from "../../../components/authentication/AuthenticatedLayout";
import Forum from "../components/ForumMainBody/Forum";

const ForumPage = () => {
  return (
    <AuthenticatedLayout>
      <div className="w-full">
        <h1 className="w-11/12 text-3xl font-bold text-left ms-16 bg-bitBrown rounded-lg text-yellow-600 px-4 py-2">Forum</h1>
      </div>
      <Forum />
    </AuthenticatedLayout> 
  );
}

export default ForumPage;