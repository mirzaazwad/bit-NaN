ALTER TABLE chat_downvotes ADD UNIQUE (id,user_email);
ALTER TABLE chat_upvotes ADD UNIQUE (id,user_email);
ALTER TABLE chat_comment_downvotes ADD UNIQUE (id,user_email);
ALTER TABLE chat_comment_upvotes ADD UNIQUE (id,user_email);