CREATE ROW TABLE "METRIC2"."M2_DWP_HISTORY"  ( "DWP_HIST_ID" INT CS_INT NOT NULL, "DASHBOARD_WIDGET_PARAM_ID" INT CS_INT NOT NULL, "DT_ADDED" LONGDATE CS_LONGDATE DEFAULT CURRENT_TIMESTAMP, "VALUE" VARCHAR(100) CS_STRING, PRIMARY KEY ( "DWP_HIST_ID" ) ) 