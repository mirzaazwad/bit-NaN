ALTER TABLE chat_downvotes ADD UNIQUE (chat_id,user_email);
ALTER TABLE chat_upvotes ADD UNIQUE (chat_id,user_email);
ALTER TABLE chat_comment_downvotes ADD UNIQUE (comment_id,user_email);
ALTER TABLE chat_comment_upvotes ADD UNIQUE (comment_id,user_email);