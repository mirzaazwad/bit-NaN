ALTER TABLE chat_documents DROP CONSTRAINT IF EXISTS chat_documents_forum_id_user_email_key;
ALTER TABLE chat_documents ADD UNIQUE (forum_id);