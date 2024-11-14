import React from "react";
import { redirect } from "next/navigation";
import GenerateForm from "@/app/components/GenerateForm";
import { currentUser } from '@clerk/nextjs/server'

async function GeneartePage() {
  const user = await currentUser();

  if (!user || !user.id) {
    redirect("/sign-in");
  }


  return <GenerateForm />;
}

export default GeneartePage
