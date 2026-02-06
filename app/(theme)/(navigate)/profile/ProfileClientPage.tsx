"use client";

import { useState, useEffect } from "react";
import { HeaderOne, Text } from "@/components/Text";
import Button from "@/components/buttons/Button";
import { useAuthStore } from "@/store/auth.store";
import InputField from "@/components/inputfields/InputField";
import useAuthGuard from "@/hooks/useAuthGuard";

export default function ProfileClientPage() {
  useAuthGuard();

  const { user, updateName } = useAuthStore();
  const [username, setUsername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.name);
    }
  }, [user]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!username.trim()) {
      setErrorMessage("Username cannot be empty");
      return;
    }

    setIsLoading(true);

    try {
      setTimeout(() => {
        if (username !== user?.name) {
          updateName(username);
        }

        setSuccessMessage("Profile updated successfully!");
        setIsLoading(false);

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }, 500);
    } catch (error) {
      setErrorMessage("Failed to update profile");
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl p-6 mx-auto">
      <HeaderOne className="mb-6">Profile Settings</HeaderOne>

      {successMessage && (
        <div className="p-4 mb-6 border rounded-lg bg-card border-border">
          <Text className="text-foreground">{successMessage}</Text>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 mb-6 border rounded-lg bg-card border-border">
          <Text className="text-foreground">{errorMessage}</Text>
        </div>
      )}

      <form
        onSubmit={handleUpdateProfile}
        className="p-6 border rounded-lg bg-card border-border"
      >
        <InputField
          label="Username"
          id="username"
          type="text"
          value={username}
          setValue={setUsername}
        ></InputField>
        <div className="flex gap-3">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
