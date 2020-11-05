# Migration `20201105161701-init`

This migration has been generated at 11/5/2020, 5:17:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `Portfolio` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
`url` varchar(191)  NOT NULL ,
`photo` varchar(191)  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201105161701-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+model Portfolio {
+  id    Int    @id @default(autoincrement())
+  name  String
+  url   String
+  photo String
+}
```


