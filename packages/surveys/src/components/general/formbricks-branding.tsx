import { useTranslation } from "react-i18next";

export function FormbricksBranding() {
  const { t } = useTranslation();
  return (
    <span className="flex justify-center">
      <a
        href="https://survey.medascloud.com?utm_source=survey_branding"
        target="_blank"
        tabIndex={-1}
        rel="noopener">
        <p className="text-signature text-xs">
          {t("common.powered_by")}{" "}
          <b>
            <span className="text-branding-text hover:text-signature">Medas Survey</span>
          </b>
        </p>
      </a>
    </span>
  );
}

// Alias for compatibility
export const MedasBranding = FormbricksBranding;
