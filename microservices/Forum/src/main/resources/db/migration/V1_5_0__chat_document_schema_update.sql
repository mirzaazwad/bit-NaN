ALTER TABLE chat_documents DROP COLUMN document;
ALTER TABLE chat_documents ADD COLUMN filename varchar(200) NOT NULL;
ALTER TABLE chat_documents ADD COLUMN url TEXT NOT NULL;