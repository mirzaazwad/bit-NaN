ALTER TABLE chat_documents DROP CONSTRAINT IF EXISTS fk_chat_documents_chat_id;
ALTER TABLE chat_documents DROP COLUMN IF EXISTS chat_id;
ALTER TABLE chat_documents ADD COLUMN IF NOT EXISTS forum_id UUID NOT NULL;
ALTER TABLE chat_documents ADD CONSTRAINT fk_chat_documents_forum_id FOREIGN KEY (forum_id) REFERENCES forum(id);
ALTER TABLE chat_documents ADD UNIQUE (forum_id,user_email);