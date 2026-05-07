output "vpc_id" {
  value = aws_vpc.accordai_vpc.id
}

output "s3_bucket" {
  value = aws_s3_bucket.accordai_documents.bucket
}

output "rds_endpoint" {
  value = aws_db_instance.accordai_postgres.endpoint
}

output "redis_endpoint" {
  value = aws_elasticache_cluster.accordai_redis.cache_nodes[0].address
}
