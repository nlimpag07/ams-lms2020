/** NLI
 * Use NextJs Conditional Importing 
 * To Load Import Only the needed component
 **/
/* Imported Courses Components **/
import CourseAdd from "../../../components/course/CourseAdd";
/**End Of Imported Courses Components **/

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Layout, Row, Col, Button, Card, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainThemeLayout from "../../../components/theme-layout/MainThemeLayout";
import withAuth from "../../../hocs/withAuth";


import { useRouter } from "next/router";

import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  CloudUploadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const AddCourse = () => {
  /* const router = useRouter();
  var urlPath = router.query.course;
  var theContent;
  if (urlPath) {
    var thePage = urlPath[urlPath.length - 1];
    thePage == "add" && (theContent = <CourseAdd />);
    thePage == "edit" && (theContent = "HELLO Edit");
    thePage == "publish" && (theContent = "HELLO Publish");
    thePage == "course" && (theContent = <CourseList />);
  } */

  useEffect(() => {
  }, []);

  return (
    <MainThemeLayout>
      <Layout className="main-content-holder courses-class" id="courses-class">
        <CourseAdd />
      </Layout>

      <style jsx global>{`
        /* .status-col {
          background: #eeeeee;
          padding: 8px 0;
          min-height: 150px;
        } */
      `}</style>
    </MainThemeLayout>
  );
};

export default withAuth(AddCourse);