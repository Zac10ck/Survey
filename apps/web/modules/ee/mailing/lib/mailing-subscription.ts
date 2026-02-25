"use server";

// Medas Survey - Mailing list subscriptions disabled
// No external mailing list services

import { TUserEmail } from "@formbricks/types/user";

export type TMailingListId = "security" | "product-updates";

interface TSubscribeToMailingListParams {
  email: TUserEmail;
  listId: TMailingListId;
}

/**
 * Mailing list subscriptions are disabled for Medas Survey.
 * This function is a no-op to maintain API compatibility.
 */
export const subscribeToMailingList = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _params: TSubscribeToMailingListParams
): Promise<{ success: boolean; error?: string }> => {
  // No-op: Mailing subscriptions disabled for Medas Survey
  return { success: true };
};

export const subscribeUserToMailingList = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _params: {
    email: TUserEmail;
    isFormbricksCloud: boolean;
    subscribeToSecurityUpdates?: boolean;
    subscribeToProductUpdates?: boolean;
  }
): Promise<void> => {
  // No-op: Mailing subscriptions disabled for Medas Survey
  return;
};
