-- CreateTable
CREATE TABLE "Article" (
    "articleId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "isDraft" BOOLEAN NOT NULL DEFAULT true,
    "latestRev" INTEGER NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("articleId")
);

-- CreateTable
CREATE TABLE "Revision" (
    "revId" SERIAL NOT NULL,
    "revArticle" INTEGER NOT NULL,
    "version" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "parent" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "isHidden" BOOLEAN NOT NULL DEFAULT true,
    "revHash" TEXT NOT NULL,
    "category" INTEGER NOT NULL,
    "seriesId" INTEGER,

    CONSTRAINT "Revision_pkey" PRIMARY KEY ("revId")
);

-- CreateTable
CREATE TABLE "Series" (
    "seriesId" INTEGER NOT NULL,
    "revId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "postNumber" INTEGER NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("seriesId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "parent" INTEGER NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "tagId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("tagId")
);

-- CreateTable
CREATE TABLE "Pageprops" (
    "props_id" SERIAL NOT NULL,
    "props" JSONB NOT NULL,
    "revisionId" INTEGER NOT NULL,

    CONSTRAINT "Pageprops_pkey" PRIMARY KEY ("props_id")
);

-- CreateTable
CREATE TABLE "_RevisionToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Pageprops_revisionId_key" ON "Pageprops"("revisionId");

-- CreateIndex
CREATE UNIQUE INDEX "_RevisionToTag_AB_unique" ON "_RevisionToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RevisionToTag_B_index" ON "_RevisionToTag"("B");

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_revArticle_fkey" FOREIGN KEY ("revArticle") REFERENCES "Article"("articleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("seriesId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Revision" ADD CONSTRAINT "Revision_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pageprops" ADD CONSTRAINT "Pageprops_revisionId_fkey" FOREIGN KEY ("revisionId") REFERENCES "Revision"("revId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RevisionToTag" ADD FOREIGN KEY ("A") REFERENCES "Revision"("revId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RevisionToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("tagId") ON DELETE CASCADE ON UPDATE CASCADE;
