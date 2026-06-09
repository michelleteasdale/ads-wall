"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";
import { CreditCardVisual } from "@/components/ui/CreditCardVisual";
import { useAuth } from "@/lib/contexts/AuthContext";
import {
  HiCreditCard, HiCog6Tooth, HiSquares2X2, HiPlus,
  HiArrowRightOnRectangle, HiPencilSquare, HiCheck, HiXMark,
  HiLockClosed, HiUser, HiMapPin, HiPhone, HiEnvelope, HiCalendarDays,
} from "react-icons/hi2";

const TABS = ["overview", "cards", "settings"] as const;
type Tab = (typeof TABS)[number];

const tabIcons = {
  overview: HiSquares2X2,
  cards: HiCreditCard,
  settings: HiCog6Tooth,
};

interface FullUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  createdAt: string;
}

export default function AccountPage() {
  const t = useTranslations("account");
  const router = useRouter();
  const { user, loading, logout, refresh } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [fullUser, setFullUser] = useState<FullUser | null>(null);

  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({ firstName: "", lastName: "", phone: "", street: "", city: "", country: "", postalCode: "" });
  const [editStatus, setEditStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [editError, setEditError] = useState("");

  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [passwordStatus, setPasswordStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [passwordError, setPasswordError] = useState("");

  const fetchFullUser = useCallback(async () => {
    try {
      const res = await fetch("/api/account");
      if (res.ok) {
        const data = await res.json();
        setFullUser(data.user);
      }
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (user) fetchFullUser();
  }, [user, fetchFullUser]);

  useEffect(() => {
    if (fullUser) {
      setEditForm({
        firstName: fullUser.firstName,
        lastName: fullUser.lastName,
        phone: fullUser.phone,
        street: fullUser.street,
        city: fullUser.city,
        country: fullUser.country,
        postalCode: fullUser.postalCode,
      });
    }
  }, [fullUser]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  async function handleEditSave() {
    setEditStatus("loading");
    setEditError("");
    try {
      const res = await fetch("/api/account", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (res.ok) {
        setEditStatus("success");
        setEditMode(false);
        await fetchFullUser();
        await refresh();
        setTimeout(() => setEditStatus("idle"), 2000);
      } else {
        const data = await res.json();
        setEditError(data.error || "Failed to update");
        setEditStatus("error");
      }
    } catch {
      setEditError("Something went wrong");
      setEditStatus("error");
    }
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) return;
    if (passwordForm.newPassword.length < 8) return;

    setPasswordStatus("loading");
    setPasswordError("");
    try {
      const res = await fetch("/api/account", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      });
      if (res.ok) {
        setPasswordStatus("success");
        setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
        setTimeout(() => setPasswordStatus("idle"), 3000);
      } else {
        const data = await res.json();
        setPasswordError(data.error || "Failed to change password");
        setPasswordStatus("error");
      }
    } catch {
      setPasswordError("Something went wrong");
      setPasswordStatus("error");
    }
  }

  return (
    <div className="pt-24 min-h-screen">
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-bold mb-8">
            <GradientText>{t("title")}</GradientText>
          </h1>

          {/* Tabs */}
          <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-8 max-w-md">
            {TABS.map((tab) => {
              const Icon = tabIcons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-white text-primary-500 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {t(`tabs.${tab}`)}
                </button>
              );
            })}
          </div>

          {/* ── Overview ── */}
          {activeTab === "overview" && (
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-6">
                {t("overview.welcome")}, {user.firstName}!
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {(["balance", "totalCards", "activeCards", "totalSpent"] as const).map((stat) => (
                  <Card key={stat} hover={false}>
                    <p className="text-sm text-text-tertiary mb-1">{t(`overview.${stat}`)}</p>
                    <p className="text-2xl font-bold font-mono text-text-primary">
                      {stat === "balance" || stat === "totalSpent" ? "$0.00" : "0"}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Account details summary */}
              {fullUser && (
                <Card hover={false}>
                  <h3 className="font-semibold text-text-primary mb-4">Account Details</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <HiUser className="h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-text-tertiary text-xs">Name</p>
                        <p className="text-text-primary">{fullUser.firstName} {fullUser.lastName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiEnvelope className="h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-text-tertiary text-xs">Email</p>
                        <p className="text-text-primary">{fullUser.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiPhone className="h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-text-tertiary text-xs">Phone</p>
                        <p className="text-text-primary">{fullUser.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiCalendarDays className="h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-text-tertiary text-xs">Date of Birth</p>
                        <p className="text-text-primary">{fullUser.dateOfBirth}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:col-span-2">
                      <HiMapPin className="h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <p className="text-text-tertiary text-xs">Address</p>
                        <p className="text-text-primary">{fullUser.street}, {fullUser.city}, {fullUser.country}, {fullUser.postalCode}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* ── Cards ── */}
          {activeTab === "cards" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">{t("cards.title")}</h2>
                <Button size="sm">
                  <HiPlus className="h-4 w-4" />
                  {t("cards.createCard")}
                </Button>
              </div>

              <div className="max-w-md mx-auto mb-8">
                <CreditCardVisual className="w-full" />
              </div>

              <Card hover={false} className="text-center py-12">
                <HiCreditCard className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-text-secondary">{t("cards.empty")}</p>
              </Card>
            </div>
          )}

          {/* ── Settings ── */}
          {activeTab === "settings" && (
            <div className="max-w-xl space-y-6">
              <h2 className="text-xl font-semibold text-text-primary">{t("settings.title")}</h2>

              {/* Personal Info */}
              <Card hover={false}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">{t("settings.personalInfo")}</h3>
                  {!editMode ? (
                    <button
                      onClick={() => setEditMode(true)}
                      className="text-sm text-primary-500 hover:text-primary-600 flex items-center gap-1 cursor-pointer"
                    >
                      <HiPencilSquare className="h-4 w-4" /> Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => { setEditMode(false); setEditStatus("idle"); setEditError(""); }}
                      className="text-sm text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                    >
                      <HiXMark className="h-4 w-4" /> Cancel
                    </button>
                  )}
                </div>

                {editMode ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Input label="First Name" id="edit-first" value={editForm.firstName} onChange={(e) => setEditForm((p) => ({ ...p, firstName: e.target.value }))} />
                      <Input label="Last Name" id="edit-last" value={editForm.lastName} onChange={(e) => setEditForm((p) => ({ ...p, lastName: e.target.value }))} />
                    </div>
                    <Input label="Phone" id="edit-phone" value={editForm.phone} onChange={(e) => setEditForm((p) => ({ ...p, phone: e.target.value }))} />
                    <Input label="Street" id="edit-street" value={editForm.street} onChange={(e) => setEditForm((p) => ({ ...p, street: e.target.value }))} />
                    <div className="grid grid-cols-2 gap-3">
                      <Input label="City" id="edit-city" value={editForm.city} onChange={(e) => setEditForm((p) => ({ ...p, city: e.target.value }))} />
                      <Input label="Postal Code" id="edit-zip" value={editForm.postalCode} onChange={(e) => setEditForm((p) => ({ ...p, postalCode: e.target.value }))} />
                    </div>
                    {editError && <p className="text-sm text-accent-rose">{editError}</p>}
                    {editStatus === "success" && <p className="text-sm text-accent-emerald flex items-center gap-1"><HiCheck className="h-4 w-4" /> Saved</p>}
                    <Button onClick={handleEditSave} disabled={editStatus === "loading"} size="sm">
                      {editStatus === "loading" ? <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> : "Save Changes"}
                    </Button>
                  </div>
                ) : fullUser ? (
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-text-tertiary text-xs mb-0.5">First Name</p>
                        <p className="text-text-primary">{fullUser.firstName}</p>
                      </div>
                      <div>
                        <p className="text-text-tertiary text-xs mb-0.5">Last Name</p>
                        <p className="text-text-primary">{fullUser.lastName}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-text-tertiary text-xs mb-0.5">Email</p>
                      <p className="text-text-primary">{fullUser.email}</p>
                    </div>
                    <div>
                      <p className="text-text-tertiary text-xs mb-0.5">Phone</p>
                      <p className="text-text-primary">{fullUser.phone}</p>
                    </div>
                    <div>
                      <p className="text-text-tertiary text-xs mb-0.5">Date of Birth</p>
                      <p className="text-text-primary">{fullUser.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-text-tertiary text-xs mb-0.5">Address</p>
                      <p className="text-text-primary">{fullUser.street}, {fullUser.city}, {fullUser.country}, {fullUser.postalCode}</p>
                    </div>
                    <div>
                      <p className="text-text-tertiary text-xs mb-0.5">Member Since</p>
                      <p className="text-text-primary">{new Date(fullUser.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-20 flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full border-2 border-slate-300 border-t-slate-600 animate-spin" />
                  </div>
                )}
              </Card>

              {/* Change Password */}
              <Card hover={false}>
                <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <HiLockClosed className="h-4 w-4 text-slate-400" />
                  Change Password
                </h3>
                <form onSubmit={handlePasswordChange} className="space-y-3">
                  <Input
                    label="Current Password"
                    id="current-pw"
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm((p) => ({ ...p, currentPassword: e.target.value }))}
                    required
                  />
                  <Input
                    label="New Password"
                    id="new-pw"
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm((p) => ({ ...p, newPassword: e.target.value }))}
                    required
                  />
                  <Input
                    label="Confirm New Password"
                    id="confirm-pw"
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm((p) => ({ ...p, confirmPassword: e.target.value }))}
                    required
                  />
                  <p className="text-xs text-text-tertiary">At least 8 characters</p>
                  {passwordForm.newPassword && passwordForm.confirmPassword && passwordForm.newPassword !== passwordForm.confirmPassword && (
                    <p className="text-xs text-accent-rose">Passwords do not match</p>
                  )}
                  {passwordError && <p className="text-sm text-accent-rose">{passwordError}</p>}
                  {passwordStatus === "success" && <p className="text-sm text-accent-emerald flex items-center gap-1"><HiCheck className="h-4 w-4" /> Password changed successfully</p>}
                  <Button
                    type="submit"
                    size="sm"
                    disabled={
                      passwordStatus === "loading" ||
                      !passwordForm.currentPassword ||
                      passwordForm.newPassword.length < 8 ||
                      passwordForm.newPassword !== passwordForm.confirmPassword
                    }
                  >
                    {passwordStatus === "loading" ? <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> : "Change Password"}
                  </Button>
                </form>
              </Card>

              {/* Logout */}
              <Button
                variant="outline"
                className="text-accent-rose border-accent-rose/20 hover:bg-accent-rose/5"
                onClick={handleLogout}
              >
                <HiArrowRightOnRectangle className="h-4 w-4" />
                {t("settings.logout")}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
