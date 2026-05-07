resource "aws_vpc" "accordai_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "${var.project_name}-vpc"
  }
}

resource "aws_internet_gateway" "accordai_igw" {
  vpc_id = aws_vpc.accordai_vpc.id

  tags = {
    Name = "${var.project_name}-igw"
  }
}
