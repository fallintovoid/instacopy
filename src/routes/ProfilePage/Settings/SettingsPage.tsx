import React, { useEffect } from "react";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/hooks";
import { Values } from "./Settings.interface";
import { setSettings } from "../../../store/slices/profile/profile";
import { validateUsername } from "../../../lib/funcs/validateUsername";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import s from "./SettingsPage.module.scss";

type Props = {};

const Settings = (props: Props) => {
  const { username, description, profileAvi } = useAppSelector(
    (state) => state.profile
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Settings";
  }, []);

  const SettingsSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username is too short")
      .max(15, "Username is too long")
      .required("This field is required")
      .strict(),
    description: Yup.string().max(20, "Description is too long"),
    profileAvi: Yup.string()
      .url("It`s not an URL")
      .required("This field is required"),
  });

  return (
    <div className={s.settings}>
      <div className={s.wrapper}>
        <h2>Your profile settings</h2>
        <Formik
          initialValues={{
            username,
            description,
            profileAvi,
          }}
          validationSchema={SettingsSchema}
          onSubmit={(
            { username, description, profileAvi }: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            dispatch(
              setSettings({
                username,
                description,
                profileAvi,
              })
            );
            setSubmitting(false);
            navigate("../profile");
          }}
        >
          {({ isSubmitting }) => (
            <Form className={s.form}>
              <div className={s.input}>
                <label htmlFor="username">Username</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="username"
                  validate={validateUsername}
                />
                <ErrorMessage name="username">
                  {(msg) => <div className={s.errormessage}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className={s.input}>
                <label htmlFor="description">Description</label>
                <Field
                  id="description"
                  name="description"
                  placeholder="description"
                  as="textarea"
                />
                <ErrorMessage name="description">
                  {(msg) => <div className={s.errormessage}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className={s.input}>
                <label htmlFor="profileAvi">Link on your avatar image</label>
                <Field
                  id="profileAvi"
                  name="profileAvi"
                  placeholder="Avatar link"
                />
                <ErrorMessage name="profileAvi">
                  {(msg) => (
                    <div className={s.errormessage}>
                      <p>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={s.button}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Settings;
