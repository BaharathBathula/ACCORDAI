resource "aws_s3_bucket" "accordai_documents" {
  bucket = "accordai-documents-storage"

  tags = {
    Name = "accordai-documents"
  }
}
