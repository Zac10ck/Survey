import "server-only";
import { cache as reactCache } from "react";
import {
  TEnterpriseLicenseDetails,
  TEnterpriseLicenseFeatures,
  TEnterpriseLicenseStatusReturn,
} from "@/modules/ee/license-check/types/enterprise-license";

// Medas Survey - All enterprise features are unlocked
// No external license server checks required

export const GRACE_PERIOD_MS = 3 * 24 * 60 * 60 * 1000;
export const FETCH_LICENSE_TTL_MS = 24 * 60 * 60 * 1000;
export const FAILED_FETCH_TTL_MS = 10 * 60 * 1000;

type FallbackLevel = "live" | "cached" | "grace" | "default";

type TEnterpriseLicenseResult = {
  active: boolean;
  features: TEnterpriseLicenseFeatures | null;
  lastChecked: Date;
  isPendingDowngrade: boolean;
  fallbackLevel: FallbackLevel;
  status: TEnterpriseLicenseStatusReturn;
};

// All features enabled by default for Medas Survey
const ALL_FEATURES_ENABLED: TEnterpriseLicenseFeatures = {
  isMultiOrgEnabled: true,
  projects: null, // unlimited
  twoFactorAuth: true,
  sso: true,
  whitelabel: true,
  removeBranding: true,
  contacts: true,
  ai: true,
  saml: true,
  spamProtection: true,
  auditLogs: true,
  multiLanguageSurveys: true,
  accessControl: true,
  quotas: true,
};

export class LicenseApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "LicenseApiError";
  }
}

export const getCacheKeys = () => {
  return {
    FETCH_LICENSE_CACHE_KEY: "license:status:medas",
    PREVIOUS_RESULT_CACHE_KEY: "license:previous:medas",
    FETCH_LOCK_CACHE_KEY: "license:lock:medas",
  };
};

// Always return null - no external license checks needed
export const fetchLicense = async (): Promise<TEnterpriseLicenseDetails | null> => {
  return null;
};

// Always return active license with all features enabled
export const getEnterpriseLicense = reactCache(async (): Promise<TEnterpriseLicenseResult> => {
  return {
    active: true,
    features: ALL_FEATURES_ENABLED,
    lastChecked: new Date(),
    isPendingDowngrade: false,
    fallbackLevel: "live" as const,
    status: "active" as const,
  };
});

export const getLicenseFeatures = async (): Promise<TEnterpriseLicenseFeatures | null> => {
  return ALL_FEATURES_ENABLED;
};

export const clearLicenseCache = async (): Promise<void> => {
  // No-op - no cache to clear
};

export const fetchLicenseFresh = async (): Promise<TEnterpriseLicenseDetails | null> => {
  return null;
};

export const computeFreshLicenseState = async (
  _freshLicense: TEnterpriseLicenseDetails | null
): Promise<TEnterpriseLicenseResult> => {
  return {
    active: true,
    features: ALL_FEATURES_ENABLED,
    lastChecked: new Date(),
    isPendingDowngrade: false,
    fallbackLevel: "live" as const,
    status: "active" as const,
  };
};
