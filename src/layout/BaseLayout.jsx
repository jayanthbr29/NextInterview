
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar/Sidebar";
import SidebarUser from "../components/user/SidebarUser/SidebarUser";
import { PageWrapper, ContentWrapper } from "./BaseLayout.style";
import Header from "../components/Header/Header";
import NavBar from "../components/admin/Navbar/Navbar";
import UserHeader from "../components/UserHeader/UserHeader";

const BaseLayout = () => {


  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const location = useLocation();

  // Determine layout based on path
  const isAdminPath = location.pathname.startsWith("/admin");
  const isUserPath = location.pathname.startsWith("/user");

  return (
    <PageWrapper isExpanded={isExpanded}>
      {isAdminPath ? (
        <>
          <Sidebar
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            setTitle={setTitle}
          />
          <ContentWrapper isExpanded={isExpanded}>
            <Header title={title} />
            <NavBar />
            <Outlet />
          </ContentWrapper>
        </>
      ) : isUserPath ? (
        <>
          <SidebarUser
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            setTitle={setTitle}
          />
          <ContentWrapper isExpanded={isExpanded}>
            <UserHeader title={title} />
            <Outlet />
          </ContentWrapper>
        </>
      ) : (
        <div>
          <h1>404 - Page Not Found</h1>
        </div>
      )}
    </PageWrapper>
  );
};

export default BaseLayout;
