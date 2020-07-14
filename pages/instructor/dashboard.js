import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Layout, Row, Col, Button, Card, Avatar } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainThemeLayout from "../../components/theme-layout/MainThemeLayout";
import withAuth from "../../hocs/withAuth";

import AuthoredCourses from "../../components/course/AuthoredCoursesGrid";
import ToDos from "../../components/todos/ToDos";

import Graph from "../../components/graph/Graph";
import LeaderBoard from "../../components/leaderboard/LeaderBoard";

import RecentActivities from "../../components/recent-activities/RecentActivities";
import SocialMedia from "../../components/social-media/SocialMedia"


import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  CloudUploadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const Dashboard = () => {
  const [curGridStyle, setCurGridStyle] = useState("grid");

  useEffect(() => {
    //setCurGridStyle();
  }, []);

  return (
    <MainThemeLayout>
      <Layout className="main-content-holder">
        <Row gutter={[24, 16]} className="status-banner-container">
          <Col className="gutter-row" xs={24} sm={12} md={6}>
            <div className="status-col"> </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={6}>
            <div className="status-col"> </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={6}>
            <div className="status-col"> </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={6}>
            <div className="status-col"> </div>
          </Col>
        </Row>
        <Row className="widget-container"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ margin: "1rem 0" }}
        >           
          <AuthoredCourses />
          <ToDos />          
        </Row>
        { /*2nd Level*/ }
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ margin: "1rem 0" }}
        >
          <Graph />
          <LeaderBoard />
        </Row>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ margin: "1rem 0" }}
        >
          <RecentActivities />
          <SocialMedia />
        </Row>
      </Layout>

      <style jsx global>{`
        .status-col {
          background: #eeeeee;
          padding: 8px 0;
          min-height: 150px;
        }
        
      `}</style>
    </MainThemeLayout>
  );
};

export default withAuth(Dashboard);