import React, { Component, useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import {
  Row,
  Modal,
  Card,
  Input,
  InputNumber,
  Form,
  Collapse,
  Button,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PlusOutlined,
  MinusCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
/**TextArea declaration */
const { TextArea } = Input;
/*formlabels used for modal */
const widgetFieldLabels = {
  catname: "Picklist - Featured Media",
  catValueLabel: "Featured Image",
  catFormName: "picklistfeaturedimage",
};

const CourseWidgetFeaturedImage = (props) => {
  const { shouldUpdate, showModal } = props;

  return (
    <>
      <Form.Item
        label={widgetFieldLabels.catname}
        noStyle
        allowClear
        shouldUpdate={shouldUpdate}
      >
        {({ getFieldValue }) => {
          var thisPicklist = getFieldValue(widgetFieldLabels.catFormName) || [];

          if (thisPicklist.length) {
            return (
              
                <Form.List name={widgetFieldLabels.catFormName}>
                  {(fields, { add, remove }) => {
                    return (
                      <Input.Group compact style={{ textAlign: "center",marginBottom: "15px", }}>
                        {fields.map((field, index) => {
                          field = {
                            ...field,
                            value: thisPicklist[index].name,
                          };
                          return (
                            <Form.Item
                              required={false}
                              key={`${widgetFieldLabels.catFormName}-${field.key}`}
                              style={{
                                width: "calc(70% - 8px)",
                                margin:"0"
                              }}
                            >
                              <Form.Item noStyle key={field.key}>
                                <Input
                                  placeholder={widgetFieldLabels.catValueLabel}
                                  size="medium"
                                  key={field.key}
                                  value={field.value}
                                  readOnly
                                />
                              </Form.Item>
                              
                            </Form.Item>
                          );
                        })}
                        <Form.Item style={{ marginBottom: "0" }}>
                          <Button
                            size="medium"
                            onClick={() =>
                              showModal(
                                widgetFieldLabels.catname,
                                widgetFieldLabels.catFormName,
                                modalFormBody
                              )
                            }
                          >
                            <VideoCameraOutlined /> Upload
                          </Button>
                        </Form.Item>
                      </Input.Group>
                    );
                  }}
                </Form.List>
            );
          } else {
            return (
              
                <Form.List name={widgetFieldLabels.catFormName}>
                  {(fields, { add, remove }) => {
                    return (
                      <Input.Group compact style={{ textAlign: "center",marginBottom: "15px", }}>
                        
                            <Form.Item
                              required={false}
                              key={`${widgetFieldLabels.catFormName}-0`}
                              style={{
                                width: "calc(70% - 8px)",
                                margin: "0",
                              }}
                            >
                              <Form.Item noStyle key={`${widgetFieldLabels.catFormName}-01`}>
                                <Input
                                  placeholder={widgetFieldLabels.catValueLabel}
                                  size="medium"
                                  key={`${widgetFieldLabels.catFormName}-02`}
                                  value=""
                                  readOnly
                                />
                              </Form.Item>
                              
                            </Form.Item>
                         
                        <Form.Item style={{ marginBottom: "0" }}>
                          <Button
                            size="medium"
                            onClick={() =>
                              showModal(
                                widgetFieldLabels.catname,
                                widgetFieldLabels.catFormName,
                                modalFormBody
                              )
                            }
                          >
                            <VideoCameraOutlined /> Upload
                          </Button>
                        </Form.Item>
                      </Input.Group>
                    );
                  }}
                </Form.List>
              
            );
          }
        }}
      </Form.Item>
      <style jsx global>{``}</style>
    </>
  );
};
const modalFormBody = () => {
  return (
    <Form.Item
      name="name"
      label="Featured Image"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
};
export default CourseWidgetFeaturedImage;
