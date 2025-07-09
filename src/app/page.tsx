"use client";
import { Box, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type Contact = {
  first_name: string;
  last_name: string;
};

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      const res = await fetch("/api/webhook");
      const data = await res.json();
      setContacts(data.contacts || []);
    }

    fetchContacts();
  }, []);

  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts received yet.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact, index) => (
            <li key={index} className="border rounded-lg p-4 shadow-sm">
              <p className="text-lg font-medium">
                {contact.first_name} {contact.last_name}
              </p>
              <Box>
                {Object.entries(contact).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong>{" "}
                    <span>
                      {typeof value === "object" && value !== null
                        ? JSON.stringify(value)
                        : String(value)}
                    </span>
                  </div>
                ))}
              </Box>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
